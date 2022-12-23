import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ViewOnGithubButton = () => {
  return (
    <div>
      <Tooltip title="view on GitHub">
        <IconButton href="https://github.com/mimasala/mischa-portfolio">
          <GitHubIcon color="primary"/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ViewOnGithubButton;
