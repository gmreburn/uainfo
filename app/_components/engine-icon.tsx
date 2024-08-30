import React from "react";

import { FaServer } from "react-icons/fa";
type Props = {
	engine?: {
		name?: string;
		version?: string;
	};
};

function EngineIcon({ engine }: Props) {
	const Icon = getEngineIcon(engine);
	return <Icon className='h-6 w-6 text-muted-foreground' />;
}

export default EngineIcon;

export function getEngineIcon(engine?: { name?: string; version?: string }) {
	return FaServer;
}
