import type { Dictionary, GodotArray, GodotDictionary, Object, Signal, StringName, Transform3D, XRInterface, XRTracker, float, int } from "../index.d.ts";
/**
 * Server for AR and VR features.
 * 
 * The AR/VR server is the heart of our Advanced and Virtual Reality solution and handles all the processing.
 */
export class XRServer extends Object {
/**
 * If set to `true`, the scene will be rendered as if the camera is locked to the `XROrigin3D`.
 * 
 * **Note:** This doesn't provide a very comfortable experience for users. This setting exists for doing benchmarking or automated testing, where you want to control what is rendered via code.
 */
  cameraLockedToOrigin: boolean;
/**
 * The primary `XRInterface` currently bound to the `XRServer`.
 */
  primaryInterface: XRInterface;
/**
 * The current origin of our tracking space in the virtual world. This is used by the renderer to properly position the camera with new tracking data.
 * 
 * **Note:** This property is managed by the current `XROrigin3D` node. It is exposed for access from GDExtensions.
 */
  worldOrigin: Transform3D;
/**
 * The scale of the game world compared to the real world. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter.
 */
  worldScale: float;
/**
 * Registers an `XRInterface` object.
 * @param interface_ XRInterface
 */
  addInterface(interface_: XRInterface): void;
/**
 * Registers a new `XRTracker` that tracks a physical object.
 * @param tracker XRTracker
 */
  addTracker(tracker: XRTracker): void;
/**
 * This is an important function to understand correctly. AR and VR platforms all handle positioning slightly differently.
 * For platforms that do not offer spatial tracking, our origin point (0, 0, 0) is the location of our HMD, but you have little control over the direction the player is facing in the real world.
 * For platforms that do offer spatial tracking, our origin point depends very much on the system. For OpenVR, our origin point is usually the center of the tracking space, on the ground. For other platforms, it's often the location of the tracking camera.
 * This method allows you to center your tracker on the location of the HMD. It will take the current location of the HMD and use that to adjust all your tracking data; in essence, realigning the real world to your player's current position in the game world.
 * For this method to produce usable results, tracking information must be available. This often takes a few frames after starting your game.
 * You should call this method after a few seconds have passed. For example, when the user requests a realignment of the display holding a designated button on a controller for a short period of time, or when implementing a teleport mechanism.
 * @param rotationMode int
 * @param keepHeight boolean
 */
  centerOnHmd(rotationMode: int, keepHeight: boolean): void;
/**
 * Clears the reference frame that was set by previous calls to `center_on_hmd`.
 */
  clearReferenceFrame(): void;
/**
 * Finds an interface by its `name`. For example, if your project uses capabilities of an AR/VR platform, you can find the interface for that platform by name and initialize it.
 * @param name string
 * @returns XRInterface
 */
  findInterface(name: string): XRInterface;
/**
 * Returns the primary interface's transformation.
 * @returns Transform3D
 */
  getHmdTransform(): Transform3D;
/**
 * Returns the interface registered at the given `idx` index in the list of interfaces.
 * @param idx int
 * @returns XRInterface
 */
  getInterface(idx: int): XRInterface;
/**
 * Returns the number of interfaces currently registered with the AR/VR server. If your project supports multiple AR/VR platforms, you can look through the available interface, and either present the user with a selection or simply try to initialize each interface and use the first one that returns `true`.
 * @returns int
 */
  getInterfaceCount(): int;
/**
 * Returns a list of available interfaces the ID and name of each interface.
 * @returns Dictionary[]
 */
  getInterfaces(): Dictionary[];
/**
 * Returns the reference frame transform. Mostly used internally and exposed for GDExtension build interfaces.
 * @returns Transform3D
 */
  getReferenceFrame(): Transform3D;
/**
 * Returns the positional tracker with the given `tracker_name`.
 * @param trackerName StringName
 * @returns XRTracker
 */
  getTracker(trackerName: StringName): XRTracker;
/**
 * Returns a dictionary of trackers for `tracker_types`.
 * @param trackerTypes int
 * @returns GodotDictionary<any>
 */
  getTrackers(trackerTypes: int): GodotDictionary<any>;
/**
 * Removes this `interface`.
 * @param interface_ XRInterface
 */
  removeInterface(interface_: XRInterface): void;
/**
 * Removes this `tracker`.
 * @param tracker XRTracker
 */
  removeTracker(tracker: XRTracker): void;
/**
 * Emitted when a new interface has been added.
 */
  interfaceAdded: Signal<[interfaceName: StringName]>;
/**
 * Emitted when an interface is removed.
 */
  interfaceRemoved: Signal<[interfaceName: StringName]>;
/**
 * Emitted when the reference frame transform changes.
 */
  referenceFrameChanged: Signal<[]>;
/**
 * Emitted when a new tracker has been added. If you don't use a fixed number of controllers or if you're using `XRAnchor3D`s for an AR solution, it is important to react to this signal to add the appropriate `XRController3D` or `XRAnchor3D` nodes related to this new tracker.
 */
  trackerAdded: Signal<[trackerName: StringName, type_: int]>;
/**
 * Emitted when a tracker is removed. You should remove any `XRController3D` or `XRAnchor3D` points if applicable. This is not mandatory, the nodes simply become inactive and will be made active again when a new tracker becomes available (i.e. a new controller is switched on that takes the place of the previous one).
 */
  trackerRemoved: Signal<[trackerName: StringName, type_: int]>;
/**
 * Emitted when an existing tracker has been updated. This can happen if the user switches controllers.
 */
  trackerUpdated: Signal<[trackerName: StringName, type_: int]>;
/**
 * The tracker tracks the location of the players head. This is usually a location centered between the players eyes. Note that for handheld AR devices this can be the current location of the device.
 */
  static readonly TRACKER_HEAD: int;
/**
 * The tracker tracks the location of a controller.
 */
  static readonly TRACKER_CONTROLLER: int;
/**
 * The tracker tracks the location of a base station.
 */
  static readonly TRACKER_BASESTATION: int;
/**
 * The tracker tracks the location and size of an AR anchor.
 */
  static readonly TRACKER_ANCHOR: int;
/**
 * The tracker tracks the location and joints of a hand.
 */
  static readonly TRACKER_HAND: int;
/**
 * The tracker tracks the location and joints of a body.
 */
  static readonly TRACKER_BODY: int;
/**
 * The tracker tracks the expressions of a face.
 */
  static readonly TRACKER_FACE: int;
/**
 * Used internally to filter trackers of any known type.
 */
  static readonly TRACKER_ANY_KNOWN: int;
/**
 * Used internally if we haven't set the tracker type yet.
 */
  static readonly TRACKER_UNKNOWN: int;
/**
 * Used internally to select all trackers.
 */
  static readonly TRACKER_ANY: int;
/**
 * Fully reset the orientation of the HMD. Regardless of what direction the user is looking to in the real world. The user will look dead ahead in the virtual world.
 */
  static readonly RESET_FULL_ROTATION: int;
/**
 * Resets the orientation but keeps the tilt of the device. So if we're looking down, we keep looking down but heading will be reset.
 */
  static readonly RESET_BUT_KEEP_TILT: int;
/**
 * Does not reset the orientation of the HMD, only the position of the player gets centered.
 */
  static readonly DONT_RESET_ROTATION: int;
}
