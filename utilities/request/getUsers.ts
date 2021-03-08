export async function getUsers(attachmentId: string): Promise<IAttachmentResult> {
  const data = await GET(`/attachment/${attachmentId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as IAttachmentResult;
}
