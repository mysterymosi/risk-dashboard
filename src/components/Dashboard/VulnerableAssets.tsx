import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableRow, TableHead, Chip, Stack, TableContainer, useMediaQuery } from '@mui/material';
import { topAssets } from '@/constants';
import { useTheme } from '@mui/material/styles';

const VulnerableAssets: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  // Responsive chip and cell sizes
  const chipStyle = {
    fontWeight: 600,
    fontSize: isXs ? 12 : isSm ? 13 : 14,
    height: isXs ? 22 : isSm ? 25 : 28,
    borderRadius: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mr: 0.5,
    // minWidth: 0,
  };
  const cellFontSize = isXs ? 12 : isSm ? 13 : 14;
  const cellHeight = isXs ? 36 : isSm ? 44 : 53;
  const headerFontSize = isXs ? 11 : isSm ? 12 : 12;
  const headerPaddingY = isXs ? '8px' : isSm ? '10px' : '12px';

  return (
    <Box display="flex" flexDirection="column" gap={{ xs: '12px', sm: '18px', md: '22px' }}>
      {/* make this header text a component */}
      <Typography fontWeight={700} color={theme.palette.secondary.main} fontSize={{ xs: 13, sm: 14, md: 15 }}>
        Top Vulnerable Assets
      </Typography>
      <Box sx={{ maxHeight: { xs: 160, sm: 180, md: 221 }, overflowY: 'auto', pr: 1, borderRadius: 2, border: 0 }}>
        <TableContainer
          sx={{
            maxHeight: { xs: 160, sm: 180, md: 221 },
            '&::-webkit-scrollbar': {
              width: "1px",
              height: "1px",
              backgroundColor: 'transparent',
              borderRadius: 2,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.palette.custom.scrollbarThumb,
              borderRadius: 2,
            },
          }}
        >
          <Table size="small" sx={{ pr: { xs: '6px', sm: '10px', md: '14px' }, minWidth: 0, tableLayout: 'fixed' }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ py: headerPaddingY, px: 0, color: theme.palette.text.secondary, fontWeight: 500, fontSize: headerFontSize, background: theme.palette.background.paper }}>
                  ASSET NAME
                </TableCell>
                <TableCell sx={{ py: headerPaddingY, color: theme.palette.text.secondary, fontWeight: 500, fontSize: headerFontSize, background: theme.palette.background.paper }}>
                  SEVERITY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topAssets.map((asset, idx) => (
                <TableRow key={idx} sx={{ borderBottom: idx !== topAssets.length - 1 ? `1px solid ${theme.palette.custom.chipGray}` : 'none' }}>
                  <TableCell sx={{ height: cellHeight, color: theme.palette.secondary.main, px: 0, fontWeight: 400, fontSize: cellFontSize, background: theme.palette.background.paper }}>{asset.name}</TableCell>
                  <TableCell sx={{ height: cellHeight, background: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={{ xs: '6px', sm: '8px', md: '10px' }}>
                      {asset.severity.critical > 0 && (
                        <Chip label={<><span style={{ color: theme.palette.custom.textCritical, fontWeight: 500 }}>C</span> <span style={{ color: theme.palette.custom.textNumber, fontWeight: 700 }}>{asset.severity.critical}</span></>} sx={{ ...chipStyle, bgcolor: theme.palette.custom.chipCritical }} size="small" />
                      )}
                      {asset.severity.high > 0 && (
                        <Chip label={<><span style={{ color: theme.palette.custom.severityHigh, fontWeight: 500 }}>H</span> <span style={{ color: theme.palette.custom.textNumber, fontWeight: 700 }}>{asset.severity.high}</span></>} sx={{ ...chipStyle, bgcolor: theme.palette.custom.chipRed }} size="small" />
                      )}
                      {asset.severity.medium > 0 && (
                        <Chip label={<><span style={{ color: theme.palette.custom.severityMedium, fontWeight: 500 }}>M</span> <span style={{ color: theme.palette.custom.textNumber, fontWeight: 700 }}>{asset.severity.medium}</span></>} sx={{ ...chipStyle, bgcolor: theme.palette.custom.chipOrange }} size="small" />
                      )}
                      {asset.severity.low > 0 && (
                        <Chip label={<><span style={{ color: theme.palette.custom.severityLow, fontWeight: 500 }}>L</span> <span style={{ color: theme.palette.custom.textNumber, fontWeight: 700 }}>{asset.severity.low}</span></>} sx={{ ...chipStyle, bgcolor: theme.palette.custom.chipGreen }} size="small" />
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default VulnerableAssets; 