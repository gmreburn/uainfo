import { userAgentFromString } from "next/server";
import ClientPage from "../_components/client-page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: Promise<{ ua: string }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
    const userAgent = userAgentFromString(decodeURIComponent(params.ua));

    return {
		title: `User Agent Breakdown: ${userAgent.browser.name} ${userAgent.browser.version} on ${userAgent?.os.name} ${userAgent?.os.version} (${userAgent?.engine.name} Engine)`,
		description: `Get information about ${decodeURIComponent(params.ua)}`,
	};
}

export default async function Page(props: Props) {
    const params = await props.params;
    const userAgent = userAgentFromString(decodeURIComponent(params.ua));
    return <ClientPage userAgent={userAgent} />;
}
