from modules.common.abstract_device import DeviceDescriptor


class Vendor:
    def __init__(self, vendor: str = "Discovergy"):
        self.vendor = vendor


vendor_descriptor = DeviceDescriptor(configuration_factory=Vendor)
