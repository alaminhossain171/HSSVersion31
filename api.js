export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhZTdlNGI2MC0zODlhLTQxOGQtYjg1ZC1lMTAwNzg4MzM0YjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NjU5NDc4MCwiZXhwIjoxNjY3MTk5NTgwfQ.CIZ8q2DiJo9E4ahqRyfwH9isqdLwiv1JSr7_J67hCZM";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};