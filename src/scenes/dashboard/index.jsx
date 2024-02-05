import { Box, Typography, useTheme} from "@mui/material"

import Header from "../../components/Header";


const Dashboard = () => {
    return (
    /*HEADER*/
    <Box m="20px" display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

    </Box>
    );
}

export default Dashboard;