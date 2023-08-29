import { Box, Text } from "@chakra-ui/react";

interface PageWrapperProps {
	title?: string;
	children?: React.ReactNode;
}

export const PageWrapper = ({
	title,
	children,
}: PageWrapperProps): JSX.Element => {
	return (
		<>
			{title && (
				<Box mb={4}>
					<Text as="b" fontSize="4xl">
						{title}
					</Text>
				</Box>
			)}
			{children}
		</>
	);
};
