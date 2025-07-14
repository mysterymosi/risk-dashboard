import React from 'react';
import { Box, Typography, Stack, Chip, useMediaQuery } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { severityChartData, severities } from '@/constants';
import { useTheme } from '@mui/material/styles';

const SeveritySummary: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const total = severityChartData.reduce((sum, d) => sum + d.value, 0);

  // Responsive chart size
  let chartSize = 148;
  if (isXs) chartSize = 90;
  else if (isSm) chartSize = 120;

  return (
    <Box display="flex" gap={{ xs: '12px', sm: '18px', md: '22px' }} flexDirection="column" height="100%">
      <Typography fontWeight={700} color={theme.palette.secondary.main} fontSize={{ xs: 13, sm: 14, md: 15 }}>
        Findings By Severity
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" flex={1}>
        <Box flex={1}>
          <Stack px={{ xs: '4px', sm: '8px', md: '10px' }} alignItems="flex-start" spacing={{ xs: '6px', sm: '8px', md: '10px' }}>
            {severities.map(({ label, value, color, bg }) => (
              <Chip
                key={label}
                label={
                  <>
                    {label}
                    <Box component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 700, ml: { xs: '6px', sm: '8px', md: '10px' } }}>
                      {value}
                    </Box>
                  </>
                }
                sx={{
                  height: { xs: 22, sm: 25, md: 28 },
                  bgcolor: bg,
                  borderRadius: 1.5,
                  color: color,
                  fontWeight: 500,
                  fontSize: { xs: 12, sm: 13, md: 14 },
                  justifyContent: 'flex-start',
                  minWidth: 0,
                }}
                size="small"
              />
            ))}
          </Stack>
        </Box>
        <Box flexShrink={0} ml={{ xs: 1, sm: 2 }} position="relative" display="flex" width={chartSize} height={chartSize} alignItems="center" justifyContent="center">
          <PieChart
            series={[{
              data: severityChartData,
              innerRadius: chartSize * 0.4,
              outerRadius: chartSize * 0.47,
              cornerRadius: isXs ? 3 : isSm ? 4 : 5,
              paddingAngle: 1,
            }]}
            width={chartSize}
            height={chartSize}
            hideLegend
          />
          <Box position="absolute" top={0} left={0} width={chartSize} height={chartSize} display="flex" alignItems="center" justifyContent="center">
            <Typography fontWeight={600} fontSize={{ xs: 20, sm: 28, md: 35 }} color={theme.palette.custom.textSourceNumber}>
              {total}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default SeveritySummary; 