import inquirer from 'inquirer';
import fs       from 'node:fs';

const root = import.meta.dirname + '/../src/modules';

const createDir = (dir) => {
  if (!fs.existsSync(root + dir)) {
    fs.mkdirSync(root + dir);
    console.log(`${dir} created`);
    return;
	}
  console.log(`${dir} already exists, skipping`);
};

const createFile = (path, content) => {
  if (!fs.existsSync(root + path)) {
    fs.writeFileSync(root + path, content);
    console.log(`${path} created`);
    return;
	}
  console.log(`${path} already exists, skipping`);
};

const ask = async () => {
	const nameAnswer = await inquirer.prompt({
	  type: 'input',
	  name: 'value',
	  message: 'Module name in PascalCase',
	  validate: value => value.trim() != '' && value[0] === value[0].toUpperCase(),
	});

	const name = nameAnswer.value.trim();
	
	const confirm = await inquirer.prompt({
	  type: 'confirm',
	  name: 'ok',
	  message: `Confirm ${name} ?`,
	});

	if (!confirm.ok) {
    return ask();
	}

  const loweredName = name.toLowerCase();
	
	createDir(`/${loweredName}s`);
	createDir(`/${loweredName}s/application`);
	createDir(`/${loweredName}s/domain`);
	createDir(`/${loweredName}/sinfrastructure`);
	createFile(`/${loweredName}s/domain/${name}.ts`, `export type ${name} = {\n  example: string; // todo\n};\n`);
	createFile(`/${loweredName}s/domain/${name}Repository.ts`, `import { ${name} } from './${name}';\n\nexport type ${name}Repository<T extends ${name}> = {\n  exampleGet: (id: number) => Promise<T | null>;\n}; // todo\n`);
}

try {
	ask();
} catch (error) {
  console.error(error);
}
