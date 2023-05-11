import { createContext, useState, useReducer } from 'react'

const globalContext = createContext({})

export const GlobalProvider = ({ children }) => {

    const [activeLink, setActiveLink] = useState("details")

    // DETAILS PAGE 
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [phone, setPhone] = useState("")
    const [mobile, setMobile] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState(null)

    // IMAGES PAGE
    const [logo, setLogo] = useState("")
    const [video, setVideo] = useState("")

    // TEXT DESIGN
    const [font, setFont] = useState("")
    const [fontSize, setFontSize] = useState("12")
    const [lineSpacing, setLineSpacing] = useState("")
    const [spaceFromContent, setSpaceFromContent] = useState("")
    const [templateColor, setTemplateColor] = useState("")

    // IMAGE DESIGN
    const [imageShape, setImageShape] = useReducer(() => {

    }, "")
    const [imageSize, setImageSize] = useState("")
    const [imagePosition, setImagePosition] = useState("")
    const [imageLink, setImageLink] = useState("")

    // DETAILS DESIGN
    const [label, setLabel] = useState("")
    const [direction, setDirection] = useState("")
    const [separator, setSeparator] = useState("")
    const [textColor, setTextColor] = useState("")

    // ICONS DESIGN
    const [fill, setFill] = useState("")
    const [shapes, setShapes] = useState("")
    const [iconSize, setIconSize] = useState("")
    const [spaceBetween, setSpaceBetween] = useState("")

    // DECORATIVE LINE
    const [style, setStyle] = useState("")
    const [lineColor, setLineColor] = useState("")


    const [social, updateSocials] = useReducer((prev, next) => {
        return [...prev, ...next]
    }, {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        linkedIn: "https://www.linkedin.com",
        twitter: "https://www.twitter.com"
    })

    const value = {
        activeLink,
        setActiveLink,
        name,
        setName,
        title,
        setTitle,
        company, 
        setCompany,
        phone,
        setPhone,
        mobile,
        setMobile,
        website,
        setWebsite,
        address,
        setAddress,
        email,
        setEmail,
        image,
        setImage,
        social,
        updateSocials,

        //  TEXT DESIGN
        fontSize,
        setFontSize
    }

    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}

export default globalContext