import { Icons } from "@/components/ui";
import { InternetStatus, Status, type Finding } from "@/constants"
import { Box, Chip, type Theme } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"

export const getFindingsColumns = (theme: Theme): GridColDef<Finding>[] => [
  { field: 'finding', headerName: 'FINDING', width: 130 },
  {
    field: 'asset',
    headerName: 'ASSET',
    width: 180,
    renderCell: (params: GridRenderCellParams<Finding, Finding['asset']>) => (
      params.value ? (
        <Box display="flex" alignItems="center" gap={1}>
          <img src={params.value.logo} alt="" />
          <Box
            component="span"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'inline-block',
              verticalAlign: 'bottom',
            }}
          >
            {params.value.name}
          </Box>
        </Box>
      ) : null
    ),
  },
  { field: 'software', headerName: 'AFFECTED SOFTWARE', width: 200, minWidth: 200, flex: 1 },
  {
    field: 'owner',
    headerName: 'OWNED BY',
    width: 180,
    renderCell: (params: GridRenderCellParams<Finding, Finding['owner']>) => (
      params.value ? (
        <Box display="flex" alignItems="center" gap={1}>
          <Icons.contactPhone sx={theme => ({ color: theme.palette.primary.contrastText, fontSize: 15 })} />
          <span>{params.value.name}</span>
        </Box>
      ) : null
    ),
  },
  {
    field: 'internetStatus',
    headerName: 'INTERNET EXPOSED',
    width: 140,
    renderCell: (params: GridRenderCellParams<Finding, Finding['internetStatus']>) => {
      switch (params.value) {
        case InternetStatus.Exposed:
          return (
            <Chip
              label={<Box display="flex" alignItems="center" justifyContent="center">
                <Icons.globe sx={theme => ({ color: theme.palette.custom.yellow, fontSize: 15 })} />
              </Box>}
              sx={theme => ({
                bgcolor: theme.palette.custom.chipYellow,
                color: theme.palette.custom.yellow,
                borderRadius: '5.5px',
                height: 26,
                width: 26,
                p: "10px",
              })}
              size="small"
            />
          );
        case InternetStatus.Locked:
          return (
            <Chip
              label={<Box display="flex" alignItems="center" justifyContent="center">
                <Icons.globeLock sx={theme => ({ color: theme.palette.text.secondary, fontSize: 15 })} />
              </Box>}
              sx={theme => ({
                bgcolor: theme.palette.custom.chipGray,
                color: theme.palette.text.secondary,
                borderRadius: '5.5px',
                height: 26,
                width: 26,
                p: "10px",
              })}
              size="small"
            />
          );
        case InternetStatus.Activated:
          return (
            <Chip
              label={<Box display="flex" alignItems="center" justifyContent="center">
                <Icons.lucideCheck sx={theme => ({ color: theme.palette.custom.yellow, fontSize: 15 })} />
              </Box>}
              sx={theme => ({
                bgcolor: theme.palette.custom.chipYellow,
                color: theme.palette.custom.yellow,
                borderRadius: '5.5px',
                height: 26,
                width: 26,
                p: "10px",
              })}
              size="small"
            />
          );
        case InternetStatus.None:
        default:
          return <span style={{ color: theme.palette.secondary.main, fontWeight: 500, fontSize: 13 }}>N/A</span>;
      }
    },
  },
  {
    field: 'status',
    headerName: 'STATUS',
    width: 120,
    renderCell: (params: GridRenderCellParams<Finding, string>) => (
      params.value ? (
        <Box display="flex" alignItems="center" gap={"7px"}>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              flexShrink: 0,
              background: params.value === Status.Assigned
                ? theme.palette.primary.main
                : params.value === Status.Accepted
                  ? theme.palette.success.main
                  : params.value === Status.Unassigned
                    ? '#F76565' // Not in theme, keep as is or add to theme
                    : theme.palette.text.secondary,
            }}
          />
          <span style={{ color: theme.palette.secondary.main }}>{params.value}</span>
        </Box>
      ) : null
    ),
  },
  {
    field: 'severity',
    headerName: 'SEVERITY',
    width: 110,
    renderCell: (params: GridRenderCellParams<Finding, string>) => {
      let color = '';
      let bg = '';
      switch (params.value) {
        case 'Critical':
          color = theme.palette.custom.severityCritical;
          bg = theme.palette.custom.chipDarkRed;
          break;
        case 'High':
          color = theme.palette.custom.severityHigh;
          bg = theme.palette.custom.chipRed;
          break;
        case 'Medium':
          color = theme.palette.custom.severityMedium;
          bg = theme.palette.custom.chipOrange;
          break;
        case 'Low':
          color = theme.palette.custom.severityLow;
          bg = theme.palette.custom.chipGreen;
          break;
        default:
          color = theme.palette.secondary.main;
          bg = 'transparent';
      }
      return (
        <Chip
          label={params.value}
          sx={{
            height: 28,
            bgcolor: bg,
            borderRadius: 1.5,
            color: color,
            fontWeight: 500,
            fontSize: 14,
            justifyContent: 'flex-start',
          }}
          size="small"
        />
      );
    },
  },
  { field: 'source', headerName: 'SOURCE', width: 110 },
  { field: 'firstSeen', headerName: 'FIRST SEEN', width: 140, hideSortIcons: true },
  { field: 'lastSeen', headerName: 'LAST SEEN', width: 140, hideSortIcons: true },
];