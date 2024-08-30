import React from "react";

import { FaRobot, FaUser } from "react-icons/fa";
type Props = {
	isBot?: boolean;
};

function BotIcon({ isBot }: Props) {
	const Icon = getBotIcon(isBot);
	return <Icon className='h-6 w-6 text-muted-foreground' />;
}

export default BotIcon;

export function getBotIcon(isBot?: boolean) {
	return isBot ? FaRobot : FaUser;
}
