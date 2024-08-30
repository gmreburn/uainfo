import React from "react";
import { DiChrome, DiFirefox, DiOpera, DiSafari } from "react-icons/di";
import { FaEdge, FaEdgeLegacy, FaGlobe } from "react-icons/fa";

type Props = {
	browserName?: string;
};

function BrowserIcon({ browserName }: Props) {
	const Icon = getBrowserIcon(browserName);
	return <Icon className='h-6 w-6 text-muted-foreground' />;
}

export default BrowserIcon;

function getBrowserIcon(browserName?: string) {
	if (browserName === "Chrome") {
		return DiChrome;
	} else if (browserName === "Firefox") {
		return DiFirefox;
	} else if (browserName === "Safari") {
		return DiSafari;
	} else if (browserName === "Edge") {
		return FaEdge;
	} else if (browserName === "Internet Explorer") {
		return FaEdgeLegacy;
	} else if (browserName === "Opera" || browserName === "Opera Mini") {
		return DiOpera;
	} else {
		return FaGlobe;
	}
}
