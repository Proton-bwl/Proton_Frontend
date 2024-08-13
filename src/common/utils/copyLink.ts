export const copyLink = async (content: string) => {
  await navigator.clipboard.writeText(content);
};
