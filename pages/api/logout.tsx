import cookie from 'cookie';
export default   (req ,res) => {
        res.setHeader("set-cookie",cookie.serialize("user",req.body.user,
        {
            httpOnly:true,
            secure:process.env.NODE_ENV!="development",
            expires:new Date(0),
            sameSite:"strict",
            path:"/"
        }
        ))
        res.statusCode=200
        res.json({
            success: true
        })
}

 ;