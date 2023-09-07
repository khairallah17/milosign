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
    const [fontSize, setFontSize] = useReducer((fontSize, action) => {
        if (action.value > fontSize)
            return (fontSize + 2)
        else if (action.value < fontSize)
            return (fontSize - 2)
        else
            return (fontSize)
    }, 18)
    const [lineSpacing, setLineSpacing] = useReducer((lineSpacing, action) => {
        switch (action.type) {
            case "SMALL": return (4)
            case "WIDE": return (8)
            case "BIG": return (12)
        }
    }, 0)
    const [spaceFromContent, setSpaceFromContent] = useState(1)
    const [templateColor, setTemplateColor] = useState("")

    // IMAGE DESIGN
    const [imageShape, setImageShape] = useReducer((imageShape, action) => {
        switch (action.type) {
            case "SQUARE": return ("0")
            case "ROUNDED": return ("12%")
            case "FULL": return ("100%")
        }
    }, "")
    const [imageSize, setImageSize] = useState(70)
    const [imagePosition, setImagePosition] = useReducer((imagePosition, action) => {

        switch (action.type) {
            case "TOP" : return ("justify-start");
            case "MIDDLE" : return ("justify-center");
            case "BOTTOM" : return ("justify-end");
        }

    }, "")
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

    // TEMPALTES
    const [templates, setTemplates] = useReducer((templates, action) => {

        switch (action.type) {
            case "ADD" : return [...templates, action.template]
            case "DELETE"  : return (templates.slice(action.index, action.index))
        }

    }, [])


    const [social, updateSocials] = useReducer((prev, next) => {
        return [...prev, ...next]
    }, {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        linkedIn: "https://www.linkedin.com",
        twitter: "https://www.twitter.com"
    })

    const value = {
        activeLink, setActiveLink,
        name, setName,
        title, setTitle,
        company, setCompany,
        phone, setPhone,
        mobile, setMobile,
        website, setWebsite,
        address, setAddress,
        email, setEmail,
        image, setImage,
        social, updateSocials,

        //  TEXT DESIGN
        font, setFont,
        fontSize, setFontSize,
        lineSpacing, setLineSpacing,
        spaceFromContent, setSpaceFromContent,
        templateColor, setTemplateColor,

        //  TEMPALTE DESIGN
        templates, setTemplates,

        //IMAGE DESIGN
        imageSize, setImageSize,
        imagePosition, setImagePosition,
        imageLink, setImageLink,
        imageShape, setImageShape,

        //DESIGN DETAILS
        label, setLabel,
        direction, setDirection,
        separator, setSeparator,
        textColor, setTextColor
    }

    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}

export default globalContext