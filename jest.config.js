module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	clearMocks: true,
	setupFilesAfterEnv: ["./16_retrieve_all_resources/lib/prisma/client.mock.ts"],
};
