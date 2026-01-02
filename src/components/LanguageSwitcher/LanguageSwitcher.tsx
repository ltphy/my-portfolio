import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, FormControl, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Language } from '@mui/icons-material';

const useStyles = makeStyles((theme: any) => ({
    formControl: {
        minWidth: 110,
    },
    select: {
        color: '#6366f1',
        fontWeight: 500,
        fontSize: '0.875rem',
        backgroundColor: 'rgba(99, 102, 241, 0.04)',
        transition: 'all 0.2s ease-in-out',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(99, 102, 241, 0.15)',
            borderRadius: '8px',
        },
        '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(99, 102, 241, 0.3)',
            },
        },
        '&.Mui-focused': {
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6366f1',
                borderWidth: '1.5px',
            },
        },
        '& .MuiSvgIcon-root': {
            color: '#6366f1',
        },
        '& .MuiSelect-select': {
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingLeft: '10px',
            paddingRight: '28px !important',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
        }
    },
    languageIcon: {
        fontSize: '1.1rem',
        color: 'black',
    },
    menuItem: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#374151',
        '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
        },
        '&.Mui-selected': {
            backgroundColor: 'rgba(99, 102, 241, 0.12)',
            color: '#6366f1',
            '&:hover': {
                backgroundColor: 'rgba(99, 102, 241, 0.16)',
            },
        },
    }
}));

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const classes = useStyles();

    const handleLanguageChange = (event: any) => {
        i18n.changeLanguage(event.target.value);
    };

    // Get short language code (handle cases like 'en-US' -> 'en')
    const currentLang = i18n.language.split('-')[0];

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl className={classes.formControl} variant="outlined" size="small">
                <Select
                    value={currentLang}
                    onChange={handleLanguageChange}
                    className={classes.select}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                marginTop: '4px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                            }
                        }
                    }}
                >
                    <MenuItem value="en" className={classes.menuItem}>
                        <Language sx={{ fontSize: '1.1rem', marginRight: '8px'}}/>
                        English
                    </MenuItem>
                    <MenuItem value="ja" className={classes.menuItem}>
                        <Language sx={{ fontSize: '1.1rem', marginRight: '8px' }}/>
                        日本語
                    </MenuItem>
                    <MenuItem value="vi" className={classes.menuItem}>
                        <Language sx={{ fontSize: '1.1rem', marginRight: '8px' }} />
                        Tiếng Việt
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default LanguageSwitcher;
