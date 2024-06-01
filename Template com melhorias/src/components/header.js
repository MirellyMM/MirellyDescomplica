import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu'; // Não está sendo utilizado, comentado temporariamente

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Box é um contêiner flexível do Material-UI para ajudar a organizar o layout */}
            <AppBar position="static">
                {/* AppBar é um componente do Material-UI que representa uma barra de aplicativo. */}
                <Toolbar>
                    {/* Toolbar é um componente do Material-UI que representa uma barra de ferramentas */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }} // sx é uma propriedade especial do Material-UI para estilos
                    >
                        {/*  
                        <MenuIcon />
                        Ícone do menu, temporariamente removido */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/* Typography é um componente do Material-UI para manipulação de texto */}
                        Gerenciamento de Projetos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
