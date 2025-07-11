import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { severityChartData, severities } from '@/constants';
import { useTheme } from '@mui/material/styles';

const SeveritySummary: React.FC = () => {
  const theme = useTheme();
  const total = severityChartData.reduce((sum, d) => sum + d.value, 0);
  return (
    <Box display="flex" gap={"22px"} flexDirection={"column"} height="100%">
      <Typography fontWeight={700} color={theme.palette.secondary.main} fontSize={15}>
        Findings By Severity
      </Typography>
      <Box display="flex" flexWrap={"wrap"} justifyContent="space-between" flex={1}>
        <Box flex={1}>
          <Stack px="10px" alignItems="flex-start" spacing={"10px"}>
            {severities.map(({ label, value, color, bg }) => (
              <Chip
                key={label}
                label={
                  <>
                    {label}
                    <Box component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 700, ml: "10px" }}>
                      {value}
                    </Box>
                  </>
                }
                sx={{
                  height: 28,
                  bgcolor: bg,
                  borderRadius: 1.5,
                  color: color,
                  fontWeight: 500,
                  fontSize: 14,
                  justifyContent: "flex-start",
                }}
                size="small"
              />
            ))}
          </Stack>
        </Box>
        <Box flexShrink={0} ml={2} position="relative" display="flex" width={148} height={148} alignItems="center" justifyContent="center">
          <PieChart
            series={[{
              data: severityChartData,
              innerRadius: 60,
              outerRadius: 70,
              cornerRadius: 5,
              paddingAngle: 1,
            }]}
            width={148}
            height={148}
            hideLegend
          />
          <Box position="absolute" top={0} left={0} width={148} height={148} display="flex" alignItems="center" justifyContent="center">
            <Typography fontWeight={600} fontSize={35} color={theme.palette.custom.textSourceNumber}>
              {total}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default SeveritySummary; 