from modules.common.component_setup import ComponentSetup
from typing import Optional
from helpermodules.auto_str import auto_str


@auto_str
class ShellyConfiguration:
    def __init__(self, ip_address: Optional[str] = None, generation: Optional[int] = None):
        self.ip_address = ip_address
        self.generation = generation


@auto_str
class Shelly:
    def __init__(self,
                 name: str = "Shelly",
                 type: str = "shelly",
                 group: str = "other",
                 device: str = "Energiezähler/Wechselrichter/Speicher",
                 id: int = 0,
                 configuration: ShellyConfiguration = None) -> None:
        self.name = name
        self.type = type
        self.group = group
        self.device = device
        self.id = id
        self.configuration = configuration or ShellyConfiguration()


@auto_str
class ShellyCounterConfiguration:
    def __init__(self) -> None:
        pass


@auto_str
class ShellyCounterSetup(ComponentSetup[ShellyCounterConfiguration]):
    def __init__(self,
                 name: str = "Shelly Zähler",
                 type: str = "counter",
                 id: int = 0,
                 configuration: ShellyCounterConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or ShellyCounterConfiguration())


@auto_str
class ShellyInverterConfiguration:
    def __init__(self) -> None:
        pass


@auto_str
class ShellyInverterSetup(ComponentSetup[ShellyInverterConfiguration]):
    def __init__(self,
                 name: str = "Shelly Wechselrichter",
                 type: str = "inverter",
                 id: int = 0,
                 configuration: ShellyInverterConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or ShellyInverterConfiguration())


@auto_str
class ShellyBatConfiguration:
    def __init__(self) -> None:
        pass


@auto_str
class ShellyBatSetup(ComponentSetup[ShellyBatConfiguration]):
    def __init__(self,
                 name: str = "Shelly Speicher",
                 type: str = "bat",
                 id: int = 0,
                 configuration: ShellyBatConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or ShellyBatConfiguration())
