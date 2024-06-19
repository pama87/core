from modules.common.component_setup import ComponentSetup


class EvuKitConfiguration:
    def __init__(self):
        pass


class EvuKit:
    def __init__(self,
                 name: str = "openWB EVU-Kit",
                 type: str = "openWB.openwb_evu_kit",
                 group: str = "openWB",
                 id: int = 0,
                 configuration: EvuKitConfiguration = None) -> None:
        self.name = name
        self.type = type
        self.group = group
        self.id = id
        self.configuration = configuration or EvuKitConfiguration()


class EvuKitBatConfiguration:
    def __init__(self, version: int = 2):
        self.version = version


class EvuKitBatSetup(ComponentSetup[EvuKitBatConfiguration]):
    def __init__(self,
                 name: str = "Speicher-Zähler an openWB EVU-Kit",
                 type: str = "bat",
                 id: int = 0,
                 configuration: EvuKitBatConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or EvuKitBatConfiguration())


class EvuKitCounterConfiguration:
    def __init__(self, version: int = 2):
        self.version = version


class EvuKitCounterSetup(ComponentSetup[EvuKitCounterConfiguration]):
    def __init__(self,
                 name: str = "openWB EVU-Kit",
                 type: str = "counter",
                 id: int = 0,
                 configuration: EvuKitCounterConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or EvuKitCounterConfiguration())


class EvuKitInverterConfiguration:
    def __init__(self, version: int = 2):
        self.version = version


class EvuKitInverterSetup(ComponentSetup[EvuKitInverterConfiguration]):
    def __init__(self,
                 name: str = "PV-Zähler an openWB EVU-Kit",
                 type: str = "inverter",
                 id: int = 0,
                 configuration: EvuKitInverterConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or EvuKitInverterConfiguration())
