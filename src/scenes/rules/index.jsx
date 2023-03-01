import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Rules = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Header title="Rules" />

      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Scoring
        </Typography>

        <Typography sx={{ mb: 2 }}>
          No-show teams forfeit all points.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          A substitute score is counted the same as a regular member's score as long as the substitute has an established Trull Brook handicap.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Players who are late for their tee time record 0 quota points and a score of par +3 for every hole missed.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Anytime a match is played with one player versus two players, the team with one player multiplies his quota point by .075 and adds that to his total quota point to determine which team wins the third team point.
        </Typography>

        <Typography variant="h5" sx={{ mb: 2, mt: 3 }}>
          Rules
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Red and White stake rules video: <a href="https://www.youtube.com/watch?v=gXjmEKa91Fw">https://www.youtube.com/watch?v=gXjmEKa91Fw</a>
        </Typography>

        <Typography sx={{ mb: 2 }}>
          When playing hole 17 and you hit your drive into the hole 5 area, you cannot continue play of 17th up the 5th fairway. You have to get your ball back on the 17th fairway on your second shot. If you can't do that, pick your ball up on 5 and drop it on 17 at the point of entry to 5 with a 1 stroke penalty.
        </Typography>
      </Box>
    </Box>
  );
};

export default Rules;