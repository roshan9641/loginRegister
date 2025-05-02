export const sendToken = (user, statusCode, message, res) => {
  const token = user.generateToken();

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,             // Required on HTTPS (Render)
      sameSite: "None",         // Needed for cross-origin cookies
    })
    .json({
      success: true,
      message,
      token,
      user,
    });
};
