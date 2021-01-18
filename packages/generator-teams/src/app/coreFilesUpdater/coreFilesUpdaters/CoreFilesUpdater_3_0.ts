// Copyright (c) Wictor Wilén. All rights reserved. 
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { GeneratorTeamsAppOptions } from "../../GeneratorTeamsAppOptions";
import { BaseCoreFilesUpdater } from "../BaseCoreFilesUpdater";
import { Editor } from 'mem-fs-editor';
import * as Generator from 'yeoman-generator';
import * as semver from "semver";
import { Project, PropertyAssignment, SyntaxKind } from 'ts-morph';
import { Logger } from "yeoman-environment";
import chalk = require("chalk");

export class CoreFilesUpdater_3_0 extends BaseCoreFilesUpdater {
    public constructor(private currentVersion: string) {
        super();
    };

    public updateCoreFiles(options: GeneratorTeamsAppOptions, fs: Editor, log?: Logger): boolean {

        if (log) {
            log(chalk.red("Projects generated with earlier versions than 3.0.0 cannot be updated."));
        }

        return false;
    }
}