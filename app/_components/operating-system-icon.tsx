import React from "react";
import {
	DiAndroid,
	DiApple,
	DiBlackberry,
	DiDebian,
	DiLinux,
	DiRedhat,
	DiUbuntu,
	DiWindows,
} from "react-icons/di";
import { GrMonitor } from "react-icons/gr";
type Props = {
	operatingSystemName?: string;
};

function OperatingSystemIcon({ operatingSystemName }: Props) {
	const Icon = getOsIcon(operatingSystemName);
	return <Icon className='h-6 w-6 text-muted-foreground' />;
}

export default OperatingSystemIcon;

export function getOsIcon(operatingSystemName?: string) {
	if (operatingSystemName === "Windows") {
		return DiWindows;
	} else if (operatingSystemName === "macOS") {
		return DiApple;
	} else if (operatingSystemName === "iOS") {
		return DiApple;
	} else if (operatingSystemName === "Android") {
		return DiAndroid;
	} else if (operatingSystemName === "Linux") {
		return DiLinux;
	} else if (operatingSystemName === "Ubuntu") {
		return DiUbuntu;
	} else if (operatingSystemName === "Debian") {
		return DiDebian;
	} else if (operatingSystemName === "Red Hat") {
		return DiRedhat;
	} else if (operatingSystemName === "BlackBerry") {
		return DiBlackberry;
	} else {
		return GrMonitor;
	}
}
