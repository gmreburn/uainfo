"use server";

import { redirect } from "next/navigation";
import { userAgentFromString } from "next/server";

export type UserAgent = ReturnType<typeof userAgentFromString>;
export async function parseUserAgentString(ua: string) {
	return userAgentFromString(ua);
}

export async function submitAction(formData: FormData) {
	redirect("/?ua=" + encodeURIComponent(formData.get("ua")?.toString() ?? ""));
}
