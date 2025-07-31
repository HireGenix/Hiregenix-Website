import React from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoScene } from './demoScenes';
import { IntroSection } from './sections/IntroSection';
import { DashboardSection } from './sections/DashboardSection';
import { ProcessSection } from './sections/ProcessSection';
import { ResultsSection } from './sections/ResultsSection';
import { AnalyticsSection } from './sections/AnalyticsSection';
import { TransitionSection } from './sections/TransitionSection';
import { InteractiveSection } from './sections/InteractiveSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { ShowcaseSection } from './sections/ShowcaseSection';

interface SceneRendererProps {
  scene: DemoScene;
  currentSection: number;
  sectionProgress: number;
}

export const SceneRenderer: React.FC<SceneRendererProps> = ({
  scene,
  currentSection,
  sectionProgress
}) => {
  const currentSectionData = scene.sections[currentSection];

  if (!currentSectionData) return null;

  const renderSection = () => {
    switch (currentSectionData.type) {
      case 'intro':
        return <IntroSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'dashboard':
        return <DashboardSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'process':
        return <ProcessSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'results':
        return <ResultsSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'analytics':
        return <AnalyticsSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'transition':
        return <TransitionSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'interactive':
        return <InteractiveSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'comparison':
        return <ComparisonSection content={currentSectionData.content} progress={sectionProgress} />;
      case 'showcase':
        return <ShowcaseSection content={currentSectionData.content} progress={sectionProgress} />;
      default:
        return (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '60vh',
            color: 'white',
            fontSize: '1.5rem'
          }}>
            Section type &quot;{currentSectionData.type}&quot; not implemented
          </Box>
        );
    }
  };

  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};
