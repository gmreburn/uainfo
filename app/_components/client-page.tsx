"use client";
import React, { useDeferredValue } from "react";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { submitAction, UserAgent } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { parseUserAgentString } from "./actions";
import {
	DiWindows,
	DiApple,
	DiAndroid,
	DiBlackberry,
	DiDebian,
	DiLinux,
	DiRedhat,
	DiUbuntu,
} from "react-icons/di";
import { GrMonitor } from "react-icons/gr";
import {
	FaMicrochip,
	FaMobileAlt,
	FaRobot,
	FaServer,
	FaUser,
} from "react-icons/fa";
import BrowserIcon from "./browser-icon";
import OperatingSystemIcon from "./operating-system-icon";
import EngineIcon from "./engine-icon";
import CPUIcon from "./cpu-icon";
import BotIcon from "./bot-icon";

type Props = {
	userAgent: UserAgent | null;
};

function ClientPage({ userAgent: initialUserAgent }: Props) {
	const [userAgentString, setUserAgentString] = useState(initialUserAgent?.ua);
	const [ua, setUserAgent] = useState(initialUserAgent);
	const userAgent = useDeferredValue(ua);

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>User Agent Information</h1>
			<form action={submitAction} className='mb-6'>
				<div className='flex flex-col sm:flex-row gap-2'>
					<Input
						name='ua'
						type='text'
						value={userAgentString ?? ""}
						onChange={async (e) => {
							setUserAgentString(e.target.value);
							setUserAgent(await parseUserAgentString(e.target.value));
						}}
						placeholder='Enter user agent string'
						className='grow'
						autoFocus
					/>
					<Button type='submit'>Decode</Button>
				</div>
			</form>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Browser</CardTitle>
						<BrowserIcon browserName={userAgent?.browser.name} />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{userAgent?.browser.name}</div>
						<p className='text-xs text-muted-foreground'>
							Version: {userAgent?.browser.version}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Engine</CardTitle>
						<EngineIcon engine={userAgent?.engine} />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{userAgent?.engine.name}</div>
						<p className='text-xs text-muted-foreground'>
							Version: {userAgent?.engine.version}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Operating System
						</CardTitle>
						<OperatingSystemIcon operatingSystemName={userAgent?.os.name} />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{userAgent?.os.name}</div>
						<p className='text-xs text-muted-foreground'>
							Version: {userAgent?.os.version}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Device</CardTitle>
						<FaMobileAlt className='h-6 w-6 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>
							{userAgent?.device.type || "Unknown"}
						</div>
						<p className='text-xs text-muted-foreground'>
							Vendor: {userAgent?.device.vendor || "N/A"}, Model:{" "}
							{userAgent?.device.model || "N/A"}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>CPU</CardTitle>
						<CPUIcon cpu={userAgent?.cpu} />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>
							{userAgent?.cpu.architecture}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Bot Status</CardTitle>
						<BotIcon isBot={userAgent?.isBot} />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>
							{userAgent?.isBot ? "Yes" : "No"}
						</div>
					</CardContent>
				</Card>
			</div>
			<Card className='mt-4'>
				<CardHeader>
					<CardTitle>Full User Agent String</CardTitle>
					<CardDescription>
						The complete user agent string provided
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className='text-sm break-words'>{userAgent?.ua}</p>
				</CardContent>
			</Card>
		</div>
	);
}

export default ClientPage;
