"use server";

export type Etat = { ok: boolean; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MERCI =
  "C'est noté. On te prévient dès l'ouverture, sans rien te demander d'autre.";
const ERREUR =
  "Un souci technique nous empêche d'enregistrer ton adresse. Réessaie dans un instant.";

export async function inscrire(_: Etat, formData: FormData): Promise<Etat> {
  // Champ piège : un humain ne le remplit jamais.
  if (formData.get("site")) return { ok: true, message: MERCI };

  const brut = formData.get("email");
  const email = typeof brut === "string" ? brut.trim().toLowerCase() : "";

  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return {
      ok: false,
      message: "Cette adresse email ne semble pas valide. Vérifie-la et réessaie.",
    };
  }

  const url = process.env.SUPABASE_URL;
  const cle = process.env.SUPABASE_SECRET_KEY;
  if (!url || !cle) {
    console.error("Variables Supabase manquantes");
    return { ok: false, message: ERREUR };
  }

  try {
    const entetes: Record<string, string> = {
      "Content-Type": "application/json",
      apikey: cle,
      Prefer: "return=minimal",
    };
    if (cle.startsWith("eyJ")) entetes.Authorization = `Bearer ${cle}`;

    const reponse = await fetch(`${url.replace(/\/$/, "")}/rest/v1/waitlist`, {
      method: "POST",
      headers: entetes,
      body: JSON.stringify({ email }),
      cache: "no-store",
    });

    // 409 = adresse déjà inscrite : on répond pareil, sans le révéler.
    if (reponse.ok || reponse.status === 409) {
      return { ok: true, message: MERCI };
    }
    console.error("Erreur Supabase", reponse.status);
  } catch {
    console.error("Appel Supabase impossible");
  }

  return { ok: false, message: ERREUR };
}
