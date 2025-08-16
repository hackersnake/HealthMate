import User from '../models/user.model.js';


// register User
export const registerUser = async (req, res) => {
    const { name, email, mobileNo, password, gender, dob, role } = req.body;
    try {
        const newUser = await User({
            name, email, mobileNo, password, gender, dob, role
        });
        await newUser.save();

        res.status(201).json({ msg: "User Created Successfully", newUser });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};


// login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User Not Found" });

        const isPasswordMatched = await user.isPasswordMatched(password);
        if (!isPasswordMatched) return res.status(400).json({ msg: "Incorrect Email or Password" });

        const token = await user.getJwtToken();

        res.cookie("token", token, {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json({ token, msg: "User Logged In Successfully", user });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


// logout User

export const logoutUser = async (req, res) => {

    res.clearCookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });


    res.status(200).json({ msg: "User Logged Out Successfully" });
}