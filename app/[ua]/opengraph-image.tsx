import { ImageResponse } from "next/og";
import { headers as getHeaders } from "next/headers";

export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";
import { Inter as FontSans } from "next/font/google";
import BrowserIcon from "../_components/browser-icon";
import { userAgentFromString } from "next/server";
import OperatingSystemIcon from "../_components/operating-system-icon";
import EngineIcon from "../_components/engine-icon";
import CPUIcon from "../_components/cpu-icon";
import BotIcon from "../_components/bot-icon";
import DeviceIcon from "../_components/device-icon";

type Props = {
	params: { ua: string };
};
function Summary({
	icon,
	name,
	description,
}: {
	icon: JSX.Element;
	name?: string;
	description?: string;
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "33%",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
			}}
		>
			<div
				style={{
					display: "flex",
					fontSize: 128,
				}}
			>
				{icon}
			</div>
			<div style={{ fontSize: "24" }}>{name ?? "N/A"}</div>
			{description && <div style={{ color: "gray" }}>{description}</div>}
		</div>
	);
}

// Image generation
export default async function Image({ params }: Props) {
	const userAgent = userAgentFromString(params.ua);
	console.log(userAgent);
	return new ImageResponse(
		(
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ display: "flex", height: "50%" }}>
					<Summary
						icon={<BrowserIcon browserName={userAgent?.browser.name} />}
						name={userAgent?.browser.name}
						description={userAgent?.browser.version}
					/>
					<Summary
						icon={<EngineIcon engine={userAgent?.engine} />}
						name={userAgent?.engine.name}
						description={userAgent?.engine.version}
					/>
					<Summary
						icon={
							<OperatingSystemIcon operatingSystemName={userAgent?.os.name} />
						}
						name={userAgent?.os.name}
						description={userAgent?.os.version}
					/>
				</div>
				<div style={{ display: "flex", height: "50%" }}>
					<Summary
						icon={<DeviceIcon device={userAgent?.device} />}
						name={userAgent?.device.type || "Unknown"}
						description={`Vendor: ${
							userAgent?.device.vendor || "N/A"
						}, Model: ${userAgent?.device.model || "N/A"}`}
					/>
					<Summary
						icon={<CPUIcon cpu={userAgent?.cpu} />}
						name={userAgent?.cpu.architecture}
					/>
					<Summary
						icon={<BotIcon isBot={userAgent?.isBot} />}
						name={userAgent?.isBot ? "Bot" : "Not Bot"}
					/>
				</div>
			</div>
		)
	);
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					display: "flex",
					alignItems: "center",
					// flexDirection: "column",
				}}
			>
				<div
					style={{
						fontSize: 128,
						background: "white",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							fontSize: 128,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<BrowserIcon browserName='Edge' />
							{userAgent?.isBot ? "yes" : "no"}
						</div>
					</div>
					<div
						style={{
							fontSize: 128,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<BrowserIcon browserName={userAgent?.browser.name} />
							{userAgent?.browser.name}
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					hi
				</div>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			// fonts: [
			// 	{
			// 		name: "Inter",
			// 		data: await interSemiBold,
			// 		style: "normal",
			// 		weight: 400,
			// 	},
			// ],
		}
	);
}
