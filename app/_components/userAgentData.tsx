"use client";
import React, { useState } from "react";
import { UserAgent } from "./actions";

type Props = {
	userAgent: UserAgent;
};

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUserAgentData = parseUserAgent(userAgentString);
//     setUserAgentData(newUserAgentData);
// };
function UserAgentData({ userAgent }: Props) {
	const [userAgentData, setUserAgentData] = useState<UserAgent>(userAgent);
	return <div>UserAgentData</div>;
}

export default UserAgentData;
