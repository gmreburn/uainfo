import { userAgentFromString } from "next/server";
import ClientPage from "../_components/client-page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { ua: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const userAgent = userAgentFromString(decodeURIComponent(params.ua));

	return {
		title: `User Agent Breakdown: ${userAgent.browser.name} ${userAgent.browser.version} on ${userAgent?.os.name} ${userAgent?.os.version} (${userAgent?.engine.name} Engine)`,
		description: `Get information about ${decodeURIComponent(params.ua)}`,
	};
}

export default async function Page({ params }: Props) {
	const userAgent = userAgentFromString(decodeURIComponent(params.ua));
	return <ClientPage userAgent={userAgent} />;
}
