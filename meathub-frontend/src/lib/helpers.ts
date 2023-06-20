export const delay = async (seconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const USE_MOCK_API = true;

export function selectBasedOnMock<T>(mocked: T, real: T): T {
  return USE_MOCK_API ? mocked : real;
}
