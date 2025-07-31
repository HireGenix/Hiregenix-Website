// Test file to verify imports work correctly
import { demoScenes, DemoScene, DemoSection } from './cinematic/demoScenes';
import { DemoHeader } from './cinematic/DemoHeader';
import { DemoControls } from './cinematic/DemoControls';
import { SceneRenderer } from './cinematic/SceneRenderer';

// This should compile without errors if all imports are working
console.log('Import test successful');
console.log('Total scenes:', demoScenes.length);

export {};
