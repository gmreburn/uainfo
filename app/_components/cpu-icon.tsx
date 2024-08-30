import React from "react";

import { FaMicrochip } from "react-icons/fa";
type Props = {
	cpu?: {
		architecture?: string;
	};
};

function CPUIcon({ cpu }: Props) {
	const Icon = getCPUIcon(cpu);
	return <Icon className='h-6 w-6 text-muted-foreground' />;
}

export default CPUIcon;

export function getCPUIcon(cpu?: { architecture?: string }) {
	return FaMicrochip;
}
