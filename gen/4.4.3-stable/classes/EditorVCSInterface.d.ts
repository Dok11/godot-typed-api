import type { Dictionary, GodotArray, GodotDictionary, Object, String, float, int } from "../index.d.ts";
/**
 * Version Control System (VCS) interface, which reads and writes to the local VCS in use.
 * 
 * Defines the API that the editor uses to extract information from the underlying VCS. The implementation of this API is included in VCS plugins, which are GDExtension plugins that inherit `EditorVCSInterface` and are attached (on demand) to the singleton instance of `EditorVCSInterface`. Instead of performing the task themselves, all the virtual functions listed below are calling the internally overridden functions in the VCS plugins to provide a plug-n-play experience. A custom VCS plugin is supposed to inherit from `EditorVCSInterface` and override each of these virtual functions.
 */
export class EditorVCSInterface extends Object {
/**
 * Helper function to add an array of `diff_hunks` into a `diff_file`.
 * @param diffFile GodotDictionary<any>
 * @param diffHunks Dictionary[]
 * @returns GodotDictionary<any>
 */
  addDiffHunksIntoDiffFile(diffFile: GodotDictionary<any>, diffHunks: Dictionary[]): GodotDictionary<any>;
/**
 * Helper function to add an array of `line_diffs` into a `diff_hunk`.
 * @param diffHunk GodotDictionary<any>
 * @param lineDiffs Dictionary[]
 * @returns GodotDictionary<any>
 */
  addLineDiffsIntoDiffHunk(diffHunk: GodotDictionary<any>, lineDiffs: Dictionary[]): GodotDictionary<any>;
/**
 * Checks out a `branch_name` in the VCS.
 * @param branchName string
 * @returns boolean
 */
  private checkoutBranch(branchName: string): boolean;
/**
 * Commits the currently staged changes and applies the commit `msg` to the resulting commit.
 * @param msg string
 */
  private commit(msg: string): void;
/**
 * Creates a new branch named `branch_name` in the VCS.
 * @param branchName string
 */
  private createBranch(branchName: string): void;
/**
 * Helper function to create a commit `Dictionary` item. `msg` is the commit message of the commit. `author` is a single human-readable string containing all the author's details, e.g. the email and name configured in the VCS. `id` is the identifier of the commit, in whichever format your VCS may provide an identifier to commits. `unix_timestamp` is the UTC Unix timestamp of when the commit was created. `offset_minutes` is the timezone offset in minutes, recorded from the system timezone where the commit was created.
 * @param msg string
 * @param author string
 * @param id string
 * @param unixTimestamp int
 * @param offsetMinutes int
 * @returns GodotDictionary<any>
 */
  createCommit(msg: string, author: string, id: string, unixTimestamp: int, offsetMinutes: int): GodotDictionary<any>;
/**
 * Helper function to create a `Dictionary` for storing old and new diff file paths.
 * @param newFile string
 * @param oldFile string
 * @returns GodotDictionary<any>
 */
  createDiffFile(newFile: string, oldFile: string): GodotDictionary<any>;
/**
 * Helper function to create a `Dictionary` for storing diff hunk data. `old_start` is the starting line number in old file. `new_start` is the starting line number in new file. `old_lines` is the number of lines in the old file. `new_lines` is the number of lines in the new file.
 * @param oldStart int
 * @param newStart int
 * @param oldLines int
 * @param newLines int
 * @returns GodotDictionary<any>
 */
  createDiffHunk(oldStart: int, newStart: int, oldLines: int, newLines: int): GodotDictionary<any>;
/**
 * Helper function to create a `Dictionary` for storing a line diff. `new_line_no` is the line number in the new file (can be `-1` if the line is deleted). `old_line_no` is the line number in the old file (can be `-1` if the line is added). `content` is the diff text. `status` is a single character string which stores the line origin.
 * @param newLineNo int
 * @param oldLineNo int
 * @param content string
 * @param status string
 * @returns GodotDictionary<any>
 */
  createDiffLine(newLineNo: int, oldLineNo: int, content: string, status: string): GodotDictionary<any>;
/**
 * Creates a new remote destination with name `remote_name` and points it to `remote_url`. This can be an HTTPS remote or an SSH remote.
 * @param remoteName string
 * @param remoteUrl string
 */
  private createRemote(remoteName: string, remoteUrl: string): void;
/**
 * Helper function to create a `Dictionary` used by editor to read the status of a file.
 * @param filePath string
 * @param changeType int
 * @param area int
 * @returns GodotDictionary<any>
 */
  createStatusFile(filePath: string, changeType: int, area: int): GodotDictionary<any>;
/**
 * Discards the changes made in a file present at `file_path`.
 * @param filePath string
 */
  private discardFile(filePath: string): void;
/**
 * Fetches new changes from the `remote`, but doesn't write changes to the current working directory. Equivalent to `git fetch`.
 * @param remote string
 */
  private fetch(remote: string): void;
/**
 * Gets an instance of an `Array` of `String`s containing available branch names in the VCS.
 * @returns String[]
 */
  private getBranchList(): String[];
/**
 * Gets the current branch name defined in the VCS.
 * @returns string
 */
  private getCurrentBranchName(): string;
/**
 * Returns an array of `Dictionary` items (see `create_diff_file`, `create_diff_hunk`, `create_diff_line`, `add_line_diffs_into_diff_hunk` and `add_diff_hunks_into_diff_file`), each containing information about a diff. If `identifier` is a file path, returns a file diff, and if it is a commit identifier, then returns a commit diff.
 * @param identifier string
 * @param area int
 * @returns Dictionary[]
 */
  private getDiff(identifier: string, area: int): Dictionary[];
/**
 * Returns an `Array` of `Dictionary` items (see `create_diff_hunk`), each containing a line diff between a file at `file_path` and the `text` which is passed in.
 * @param filePath string
 * @param text string
 * @returns Dictionary[]
 */
  private getLineDiff(filePath: string, text: string): Dictionary[];
/**
 * Returns an `Array` of `Dictionary` items (see `create_status_file`), each containing the status data of every modified file in the project folder.
 * @returns Dictionary[]
 */
  private getModifiedFilesData(): Dictionary[];
/**
 * Returns an `Array` of `Dictionary` items (see `create_commit`), each containing the data for a past commit.
 * @param maxCommits int
 * @returns Dictionary[]
 */
  private getPreviousCommits(maxCommits: int): Dictionary[];
/**
 * Returns an `Array` of `String`s, each containing the name of a remote configured in the VCS.
 * @returns String[]
 */
  private getRemotes(): String[];
/**
 * Returns the name of the underlying VCS provider.
 * @returns string
 */
  private getVcsName(): string;
/**
 * Initializes the VCS plugin when called from the editor. Returns whether or not the plugin was successfully initialized. A VCS project is initialized at `project_path`.
 * @param projectPath string
 * @returns boolean
 */
  private initialize(projectPath: string): boolean;
/**
 * Pops up an error message in the editor which is shown as coming from the underlying VCS. Use this to show VCS specific error messages.
 * @param msg string
 */
  popupError(msg: string): void;
/**
 * Pulls changes from the remote. This can give rise to merge conflicts.
 * @param remote string
 */
  private pull(remote: string): void;
/**
 * Pushes changes to the `remote`. If `force` is `true`, a force push will override the change history already present on the remote.
 * @param remote string
 * @param force boolean
 */
  private push(remote: string, force: boolean): void;
/**
 * Remove a branch from the local VCS.
 * @param branchName string
 */
  private removeBranch(branchName: string): void;
/**
 * Remove a remote from the local VCS.
 * @param remoteName string
 */
  private removeRemote(remoteName: string): void;
/**
 * Set user credentials in the underlying VCS. `username` and `password` are used only during HTTPS authentication unless not already mentioned in the remote URL. `ssh_public_key_path`, `ssh_private_key_path`, and `ssh_passphrase` are only used during SSH authentication.
 * @param username string
 * @param password string
 * @param sshPublicKeyPath string
 * @param sshPrivateKeyPath string
 * @param sshPassphrase string
 */
  private setCredentials(username: string, password: string, sshPublicKeyPath: string, sshPrivateKeyPath: string, sshPassphrase: string): void;
/**
 * Shuts down VCS plugin instance. Called when the user either closes the editor or shuts down the VCS plugin through the editor UI.
 * @returns boolean
 */
  private shutDown(): boolean;
/**
 * Stages the file present at `file_path` to the staged area.
 * @param filePath string
 */
  private stageFile(filePath: string): void;
/**
 * Unstages the file present at `file_path` from the staged area to the unstaged area.
 * @param filePath string
 */
  private unstageFile(filePath: string): void;
/**
 * A new file has been added.
 */
  static readonly CHANGE_TYPE_NEW: int;
/**
 * An earlier added file has been modified.
 */
  static readonly CHANGE_TYPE_MODIFIED: int;
/**
 * An earlier added file has been renamed.
 */
  static readonly CHANGE_TYPE_RENAMED: int;
/**
 * An earlier added file has been deleted.
 */
  static readonly CHANGE_TYPE_DELETED: int;
/**
 * An earlier added file has been typechanged.
 */
  static readonly CHANGE_TYPE_TYPECHANGE: int;
/**
 * A file is left unmerged.
 */
  static readonly CHANGE_TYPE_UNMERGED: int;
/**
 * A commit is encountered from the commit area.
 */
  static readonly TREE_AREA_COMMIT: int;
/**
 * A file is encountered from the staged area.
 */
  static readonly TREE_AREA_STAGED: int;
/**
 * A file is encountered from the unstaged area.
 */
  static readonly TREE_AREA_UNSTAGED: int;
}
