import { chakra } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

interface MotionBoxProps {
	children: React.ReactNode;
	duration?: string;
}

export const MotionBox = ({
	children,
	duration = "0.8",
	...rest
}: MotionBoxProps): JSX.Element => {
	return (
		<ChakraBox
			initial={{ x: 0, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -700, opacity: 0 }}
			transition={{
				duration,
				ease: "easeInOut",
			}}
			{...rest}
		>
			{children}
		</ChakraBox>
	);
};
