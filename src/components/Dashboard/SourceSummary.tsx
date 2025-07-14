import React from 'react';
import { Box, Typography, Stack, useMediaQuery } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Icons } from '@/components/ui/icons';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

const sources = [
  {
    color: 'theme.palette.custom.pieMsDefender',
    icon: (theme: Theme) => <Icons.windows sx={{ color: theme.palette.custom.msDefender }} style={{ width: '40px', height: '40px' }} />,
    count: 428,
    name: "Microsoft Defender",
    bar: (theme: Theme) => theme.palette.custom.msDefender,
  },
  {
    color: 'theme.palette.custom.pieArcticWolf',
    icon: (theme: Theme) => <Icons.arcticWolf sx={{ color: theme.palette.custom.arcticWolfIcon }} style={{ width: '40px', height: '40px' }} />,
    count: 119,
    name: "Arctic Wolf",
    bar: (theme: Theme) => theme.palette.custom.arcticWolfBar,
  },
];

const SourceSummary: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const total = sources.reduce((sum, s) => sum + s.count, 0);

  // Responsive chart size
  let chartSize = 140;
  if (isXs) chartSize = 90;
  else if (isSm) chartSize = 120;

  // Responsive bar and icon sizes
  const barHeight = isXs ? 32 : isSm ? 40 : 48;
  const iconSize = isXs ? 24 : isSm ? 32 : 40;

  const chartData = [
    { value: sources[0].count, color: theme.palette.custom.pieMsDefender },
    { value: sources[1].count, color: theme.palette.custom.pieArcticWolf },
  ];
  return (
    <Box display="flex" gap={{ xs: '12px', sm: '18px', md: '22px' }} flexDirection="column" height="100%">
      {/* Left: Source List */}
      <Typography fontWeight={700} color={theme.palette.secondary.main} fontSize={{ xs: 13, sm: 14, md: 15 }}>
        Finding Per Source
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" flex={1}>
        <Box flex={1}>
          <Stack spacing={{ xs: 2, sm: 3, md: 4 }}>
            {sources.map((src, idx) => (
              <Box key={idx} display="flex" alignItems="center" gap={{ xs: '10px', sm: '16px', md: '20px' }}>
                {/* Vertical bar */}
                <Box sx={{ width: 6, height: barHeight, bgcolor: src.bar(theme) }} />
                <Box display="flex" alignItems="center" gap={{ xs: '6px', sm: '8px', md: '11px' }}>
                  {/* Icon */}
                  {React.cloneElement(src.icon(theme), { style: { width: iconSize, height: iconSize } })}
                  {/* Number */}
                  <Typography fontWeight={700} fontSize={{ xs: 18, sm: 24, md: 35 }} color={theme.palette.custom.textSourceNumber} sx={{ textAlign: 'right' }}>
                    {src.count}
                  </Typography>
                  {/* Name */}
                  <Box>
                    <Typography color={theme.palette.secondary.main} fontWeight={400} fontSize={{ xs: 12, sm: 13, md: 14 }} lineHeight={{ xs: '16px', sm: '18px', md: '20px' }}>
                      {src.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
        {/* Right: Donut Chart */}
        <Box flexShrink={0} ml={{ xs: 2, sm: 3, md: 4 }} position="relative" width={chartSize} height={chartSize} display="flex" alignItems="center" justifyContent="center">
          <PieChart
            series={[
              {
                data: chartData,
                innerRadius: chartSize * 0.43,
                outerRadius: chartSize * 0.5,
                cornerRadius: isXs ? 4 : isSm ? 7 : 10,
                paddingAngle: 0,
              },
            ]}
            width={chartSize}
            height={chartSize}
            hideLegend
          />
          <Box position="absolute" top={0} left={0} width={chartSize} height={chartSize} display="flex" alignItems="center" justifyContent="center">
            <Typography fontWeight={600} fontSize={{ xs: 18, sm: 24, md: 35 }} color={theme.palette.custom.textSourceNumber}>
              {total}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SourceSummary; 