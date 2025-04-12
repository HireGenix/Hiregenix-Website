"use client";

import React from 'react';
import { Container, Box, Divider } from '@mui/material';
import InvestorRelationsHero from '../../components/InvestorRelations/InvestorRelationsHero';
import InvestorRelationsOverview from '../../components/InvestorRelations/InvestorRelationsOverview';
import InvestorRelationsMarketOpportunity from '../../components/InvestorRelations/InvestorRelationsMarketOpportunity';
import InvestorRelationsProductDemo from '../../components/InvestorRelations/InvestorRelationsProductDemo';
import InvestorRelationsCompetitive from '../../components/InvestorRelations/InvestorRelationsCompetitive';
import InvestorRelationsTraction from '../../components/InvestorRelations/InvestorRelationsTraction';
import InvestorRelationsFinancials from '../../components/InvestorRelations/InvestorRelationsFinancials';
import InvestorRelationsTeam from '../../components/InvestorRelations/InvestorRelationsTeam';
import InvestorRelationsContact from '../../components/InvestorRelations/InvestorRelationsContact';

const InvestorRelationsPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <InvestorRelationsHero />
      <Container maxWidth="lg">
        <InvestorRelationsOverview />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsMarketOpportunity />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsProductDemo />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsCompetitive />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsTraction />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsFinancials />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsTeam />
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        <InvestorRelationsContact />
      </Container>
    </Box>
  );
};

export default InvestorRelationsPage;
