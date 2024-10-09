const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create a readline interface to take user input
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Function to generate file structure dynamically based on service name
function generateFileStructure(serviceName) {
	const capitalizedServiceName = capitalize(serviceName);

	return [
		// Command Files
		{
			filePath: `commands/impl/${serviceName}.command-impl.ts`,
			content: ``,
		},
		{
			filePath: `commands/handlers/${serviceName}.command-handler.ts`,
			content: ``,
		},
		{
			filePath: `commands/index.ts`,
			content: `export const ${capitalizedServiceName}CommandHandlers = [];`,
		},
		// Query Files
		{
			filePath: `queries/impl/${serviceName}.query-impl.ts`,
			content: ``,
		},
		{
			filePath: `queries/handlers/${serviceName}.query-handler.ts`,
			content: ``,
		},
		{
			filePath: `queries/index.ts`,
			content: `export const ${capitalizedServiceName}QueryHandlers = [];`,
		},
		// Other DTO, Entity, and Service/Controller Files
		{
			filePath: `dto/create-${serviceName}.dto.ts`,
			content: `export class Create${capitalizedServiceName}Dto {}`,
		},
		{
			filePath: `dto/update-${serviceName}.dto.ts`,
			content: `import { PartialType } from '@nestjs/mapped-types';
import { Create${capitalizedServiceName}Dto } from './create-${serviceName}.dto';

export class Update${capitalizedServiceName}Dto extends PartialType(Create${capitalizedServiceName}Dto) {}`,
		},
		{
			filePath: `entities/${serviceName}.entity.ts`,
			content: `export class ${capitalizedServiceName} {}`,
		},
		{
			filePath: `${serviceName}.controller.spec.ts`,
			content: `import { Test, TestingModule } from '@nestjs/testing';
import { ${capitalizedServiceName}Controller } from './${serviceName}.controller';
import { ${capitalizedServiceName}Service } from './${serviceName}.service';

describe('${capitalizedServiceName}Controller', () => {
  let controller: ${capitalizedServiceName}Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${capitalizedServiceName}Controller],
      providers: [${capitalizedServiceName}Service],
    }).compile();

    controller = module.get<${capitalizedServiceName}Controller>(${capitalizedServiceName}Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});`,
		},
		{
			filePath: `${serviceName}.controller.ts`,
			content: `import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${capitalizedServiceName}Service } from './${serviceName}.service';
import { Create${capitalizedServiceName}Dto } from './dto/create-${serviceName}.dto';
import { Update${capitalizedServiceName}Dto } from './dto/update-${serviceName}.dto';

@Controller('${serviceName}')
export class ${capitalizedServiceName}Controller {
  constructor(private readonly ${serviceName}Service: ${capitalizedServiceName}Service) {}

  @Post()
  create(@Body() create${capitalizedServiceName}Dto: Create${capitalizedServiceName}Dto) {
    return this.${serviceName}Service.create(create${capitalizedServiceName}Dto);
  }

  @Get()
  findAll() {
    return this.${serviceName}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${serviceName}Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update${capitalizedServiceName}Dto: Update${capitalizedServiceName}Dto) {
    return this.${serviceName}Service.update(+id, update${capitalizedServiceName}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${serviceName}Service.remove(+id);
  }
}`,
		},
		{
			filePath: `${serviceName}.module.ts`,
			content: `import { Module } from '@nestjs/common';
import { ${capitalizedServiceName}CommandHandlers } from './commands';
import { ${capitalizedServiceName}QueryHandlers } from './queries';
import { ${capitalizedServiceName}Controller } from './${serviceName}.controller';
import { ${capitalizedServiceName}Service } from './${serviceName}.service';

@Module({
  imports: [],
  controllers: [${capitalizedServiceName}Controller],
  providers: [${capitalizedServiceName}Service, ...${capitalizedServiceName}CommandHandlers, ...${capitalizedServiceName}QueryHandlers],
})
export class ${capitalizedServiceName}Module {}`,
		},
		{
			filePath: `${serviceName}.service.spec.ts`,
			content: `import { Test, TestingModule } from '@nestjs/testing';
import { ${capitalizedServiceName}Service } from './${serviceName}.service';

describe('${capitalizedServiceName}Service', () => {
  let service: ${capitalizedServiceName}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [${capitalizedServiceName}Service],
    }).compile();

    service = module.get<${capitalizedServiceName}Service>(${capitalizedServiceName}Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,
		},
		{
			filePath: `${serviceName}.service.ts`,
			content: `import { Injectable } from '@nestjs/common';
import { Create${capitalizedServiceName}Dto } from './dto/create-${serviceName}.dto';
import { Update${capitalizedServiceName}Dto } from './dto/update-${serviceName}.dto';

@Injectable()
export class ${capitalizedServiceName}Service {
  create(create${capitalizedServiceName}Dto: Create${capitalizedServiceName}Dto) {
    return 'This action adds a new ${serviceName}';
  }

  findAll() {
    return \`This action returns all ${serviceName}s\`;
  }

  findOne(id: number) {
    return \`This action returns a #\${id} ${serviceName}\`;
  }

  update(id: number, update${capitalizedServiceName}Dto: Update${capitalizedServiceName}Dto) {
    return \`This action updates a #\${id} ${serviceName}\`;
  }

  remove(id: number) {
    return \`This action removes a #\${id} ${serviceName}\`;
  }
}`,
		},
	];
}

// Utility function to capitalize the first letter of a string
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to create the folder and files based on the structure
function createFolderAndFiles(folderPath, serviceName) {
	const fileStructure = generateFileStructure(serviceName);

	fileStructure.forEach((file) => {
		const fullFilePath = path.join(folderPath, file.filePath);
		const dirName = path.dirname(fullFilePath);

		// Create directory if it doesn't exist
		if (!fs.existsSync(dirName)) {
			fs.mkdirSync(dirName, { recursive: true });
		}

		// Write the file content
		fs.writeFileSync(fullFilePath, file.content);
		console.log(`Created: ${fullFilePath}`);
	});
}

// Prompt for folder name and path from the user
rl.question("Please provide the service name: ", (serviceName) => {
	rl.question(
		"Please provide the path where the folder should be created: ",
		(destinationPath) => {
			const folderPath = path.join(destinationPath, serviceName);

			if (!fs.existsSync(folderPath)) {
				fs.mkdirSync(folderPath, { recursive: true });
				console.log(`Folder created at: ${folderPath}`);
				createFolderAndFiles(folderPath, serviceName);
			} else {
				console.log(
					"Folder already exists. Files will be generated inside."
				);
				createFolderAndFiles(folderPath, serviceName);
			}

			rl.close(); // Close the readline interface
		}
	);
});
