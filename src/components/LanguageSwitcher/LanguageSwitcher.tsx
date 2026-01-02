import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, FormControl, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
    formControl: {
        minWidth: 120,
    },
    select: {
        color: '#fff',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
        },
        '& .MuiSvgIcon-root': {
            color: '#fff',
        }
    }
}));

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const classes = useStyles();

    const handleLanguageChange = (event: any) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl className={classes.formControl} variant="outlined" size="small">
                <Select
                    value={i18n.language}
                    onChange={handleLanguageChange}
                    className={classes.select}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="ja">日本語</MenuItem>
                    <MenuItem value="vi">Tiếng Việt</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default LanguageSwitcher;
