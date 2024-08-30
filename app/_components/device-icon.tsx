import React from "react";

import { FaQuestionCircle } from "react-icons/fa";
type Props = {
	device?: {
		model?: string;
		type?: string;
		vendor?: string;
	};
};

function DeviceIcon({ device }: Props) {
	const Icon = getDeviceIcon(device);
	return <Icon className='h-6 w-6 text-muted-foreground' />;
}

export default DeviceIcon;

export function getDeviceIcon(device?: {
	model?: string;
	type?: string;
	vendor?: string;
}) {
	return FaQuestionCircle;
}
