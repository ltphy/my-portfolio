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
        fontSize: string;
        fontFamily: string;
    }
    toggleButton: {
        gradient: string;
        toggleBorder: string;
        switchColor: string;
        transformDark: string;
        transformLight: string;
    }

}

export const lightTheme = {
    navBar: {
        backgroundColor: "#fff",
        color: "#000",
        transition: "all 0.25s linear",
        fontSize: "30rem",
    },
    content: {
        fontSize: "16px",
        backgroundColor: "#fff",
        color: "#000",
        transition: "all 0.25s linear",
        fontFamily: "Roboto, sans-serif",
    },
    toggleButton: {
        toggleBorder: "black",
        // gradient: 'linear-gradient(#39598A, #79D7ED)',
        gradient: "#fff",
        switchColor: "#000",
        transformLight: "translateY(0)",
        transformDark: "translateY(-100px)"
    },
    title: {}
};

export const darkTheme = {
    content: {
        backgroundColor: "#18191a",
        color: "#b0b3b8",
        transition: "all 0.25s linear",
        fontSize: "16px",
        fontFamily: "Roboto, sans-serif",
    },
    navBar: {
        backgroundColor: "#242526",
        color: "#b0b3b8",
        transition: "all 0.25s linear",
    },
    toggleButton: {
        toggleBorder: "#fff",
        // gradient: "linear-gradient(#091236, #1E215D)",
        gradient: "#000",
        switchColor: "#fff",
        transformLight: "translateY(100px)",
        transformDark: "translateY(0)",
    }

};


