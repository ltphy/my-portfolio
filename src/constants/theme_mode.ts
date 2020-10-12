export interface Theme {
    navBar: {
        backgroundColor: string;
        color: string;
        transition: string;
    }
    content: {
        backgroundColor: string;
        color: string;
        transition: string;
    }


}

export const lightTheme = {
    navBar: {
        backgroundColor: "#fff",
        color: "#000",
        transition: "all 0.25s linear",
    },
    content: {
        backgroundColor: "#fff",
        color: "#000",
        transition: "all 0.25s linear",
    }
};

export const darkTheme = {
    content:{
        backgroundColor: "#18191a",
        color: "#b0b3b8",
        transition: "all 0.25s linear",
    },
    navBar: {
        backgroundColor: "#242526",
        color: "#b0b3b8",
        transition: "all 0.25s linear",
    }

};


