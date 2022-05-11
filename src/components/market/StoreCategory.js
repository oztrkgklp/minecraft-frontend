import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CategoryIcon from "@mui/icons-material/Category";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

// Exports the default store category.
const StoreCategory = () => {
    return (
        // Generates an icon for the market - ceegories.
        <Box>
            <div class="market-cetegories">
                <Link to={routes.VIP}>
                    <AssignmentIndIcon />
                    VIP
                </Link>

                <Link to={routes.Cosmetic}>
                    <CategoryIcon />
                    Kozmetik
                </Link>
                <Link to={routes.GiftCard}>
                    <CardGiftcardIcon />
                    Hediye Kartı Bozdur
                </Link>
            </div>
        </Box>
    );
};

export default StoreCategory;
