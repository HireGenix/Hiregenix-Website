import React from 'react';
import { Box, Typography, Card, LinearProgress, Chip, Avatar, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface ResultsSectionProps {
  content: any;
  progress: number;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ content, progress }) => (
  <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
    {/* Job Market Insights */}
    {content.insights && (
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Job Market Analysis Results
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Salary Range
              </Typography>
              <Typography variant="h4" sx={{ color: '#4caf50', fontWeight: 800 }}>
                ${content.insights.salary.min.toLocaleString()} - ${content.insights.salary.max.toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Median: ${content.insights.salary.median.toLocaleString()}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Available Candidates
              </Typography>
              <Typography variant="h4" sx={{ color: '#2196f3', fontWeight: 800 }}>
                {content.insights.candidatePool}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Competitiveness: {content.insights.competitiveness}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
            AI Recommendations
          </Typography>
          {content.insights.recommendations.map((rec: string, index: number) => (
            <motion.div
              key={rec}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#ff9800',
                    mr: 2,
                  }}
                />
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {rec}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Card>
    )}

    {/* Top Candidates */}
    {content.topCandidates && (
      <Box>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Top Matched Candidates
        </Typography>
        <Grid container spacing={3}>
          {content.topCandidates.map((candidate: any, index: number) => (
            <Grid item xs={12} md={6} key={candidate.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ mr: 2, fontSize: '2rem' }}>{candidate.avatar}</Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ color: 'white' }}>
                        {candidate.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {candidate.experience} • {candidate.location}
                      </Typography>
                    </Box>
                    <Chip
                      label={`${candidate.score}% Match`}
                      sx={{
                        background: candidate.score >= 95 ? '#4caf50' : candidate.score >= 90 ? '#ff9800' : '#2196f3',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                      Skills
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {candidate.skills.map((skill: string) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            background: 'rgba(102, 126, 234, 0.3)',
                            color: 'white',
                            border: '1px solid rgba(102, 126, 234, 0.5)',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                      Key Highlights
                    </Typography>
                    {candidate.highlights.map((highlight: string, idx: number) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: '#4caf50',
                            mr: 1,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Availability: {candidate.availability}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Salary: {candidate.salaryExpectation}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    )}

    {/* Assessment Results */}
    {content.assessmentResults && (
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 4,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
          Assessment Complete
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ color: '#4caf50', fontWeight: 800, mb: 1 }}>
            {content.assessmentResults.overallScore}%
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Overall Score
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {Object.entries(content.assessmentResults.breakdown).map(([category, score]) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                  {category}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={score as number}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #667eea, #764ba2)',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'right', mt: 0.5 }}>
                  {score as number}%
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Paper
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            p: 3,
            borderRadius: 2,
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
            Detailed Feedback
          </Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
            {content.assessmentResults.feedback}
          </Typography>
          <Chip
            label={content.assessmentResults.recommendation}
            sx={{
              background: '#4caf50',
              color: 'white',
              fontWeight: 600,
            }}
          />
        </Paper>
      </Card>
    )}

    {/* Interview Results */}
    {content.interviewResults && (
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Interview Analysis Complete
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h2" sx={{ color: '#4caf50', fontWeight: 800, mb: 1 }}>
                {content.interviewResults.overallRating}%
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Overall Rating
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Performance Breakdown
              </Typography>
              {[
                { label: 'Communication', value: content.interviewResults.communicationScore },
                { label: 'Technical Knowledge', value: content.interviewResults.technicalKnowledge },
                { label: 'Cultural Fit', value: content.interviewResults.culturalFit },
              ].map((metric) => (
                <Box key={metric.label} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                    {metric.label}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={metric.value}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(90deg, #4caf50, #8bc34a)',
                      },
                    }}
                  />
                  <Typography variant="body2" sx={{ color: 'white', textAlign: 'right', mt: 0.5 }}>
                    {metric.value}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                p: 3,
                borderRadius: 2,
                height: '100%',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Key Strengths
              </Typography>
              {content.interviewResults.keyStrengths.map((strength: string, index: number) => (
                <Box key={strength} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#4caf50',
                      mr: 2,
                    }}
                  />
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {strength}
                  </Typography>
                </Box>
              ))}

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Chip
                  label={content.interviewResults.recommendation}
                  sx={{
                    background: '#4caf50',
                    color: 'white',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Card>
    )}

    {/* ROI Calculation */}
    {content.roiCalculation && (
      <Box>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          ROI Analysis
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: 'rgba(255, 87, 87, 0.1)',
                border: '1px solid rgba(255, 87, 87, 0.3)',
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', mb: 3 }}>
                Traditional Hiring
              </Typography>
              
              {Object.entries(content.roiCalculation.traditional).map(([key, value]) => (
                <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </Typography>
                  <Typography sx={{ color: 'white', fontWeight: 600 }}>
                    {typeof value === 'number' ? (key.includes('Cost') ? `$${value.toLocaleString()}` : value) : String(value)}
                  </Typography>
                </Box>
              ))}
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: 'rgba(76, 175, 80, 0.1)',
                border: '1px solid rgba(76, 175, 80, 0.3)',
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', mb: 3 }}>
                With HireGenix
              </Typography>
              
              {Object.entries(content.roiCalculation.withHireGenix).map(([key, value]) => (
                <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </Typography>
                  <Typography sx={{ color: 'white', fontWeight: 600 }}>
                    {typeof value === 'number' ? (key.includes('Cost') ? `$${value.toLocaleString()}` : value) : String(value)}
                  </Typography>
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>

        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: 4,
            borderRadius: 3,
            mt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: 'white', mb: 3 }}>
            Your Savings with HireGenix
          </Typography>
          
          <Grid container spacing={3}>
            {Object.entries(content.roiCalculation.savings).map(([key, value]) => (
              <Grid item xs={12} md={4} key={key}>
                <Box>
                  <Typography variant="h4" sx={{ color: '#4caf50', fontWeight: 800, mb: 1 }}>
                    {String(value)}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>
    )}
  </Box>
);
