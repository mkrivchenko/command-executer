import { FfmegExecuter } from './commands/ffmpeg/ffmpeg.executer.js';
import { ConsoleLogger } from './out/console-logger/console-logger.js';

export class App {
	async run() {
		new FfmegExecuter(ConsoleLogger.getInstance()).execute();
		
		
		
		// const res = await new PromptService().input<number>('Число', 'number');
		// const logger = ConsoleLogger.getInstance();
		// logger.log(res);
	}

}

const app = new App();
app.run();