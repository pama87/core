from modules.electricity_tariffs.energycharts.tariff import fetch_prices


def test_fetch_prices(requests_mock):
    # setup
    requests_mock.get('https://api.energy-charts.info/price?bzn=DE-LU&start=2023-01-01T00%3A00%2B01%3A00&end=2023-01-01T23%3A00%2B01%3A00', json=SAMPLE_DATA)

    # execution
    prices = fetch_prices()

    # evaluation
    assert prices == EXPECTED_PRICES


SAMPLE_DATA = {
                "unix_seconds": [
                    1672527600,
                    1672531200,
                    1672534800,
                    1672538400,
                    1672542000,
                    1672545600,
                    1672549200,
                    1672552800,
                    1672556400,
                    1672560000,
                    1672563600,
                    1672567200,
                    1672570800,
                    1672574400,
                    1672578000,
                    1672581600,
                    1672585200,
                    1672588800,
                    1672592400,
                    1672596000,
                    1672599600,
                    1672603200,
                    1672606800,
                    1672610400
                ],
                "price": [
                    -5.17,
                    -1.07,
                    -1.47,
                    -5.08,
                    -4.49,
                    -5.4,
                    -5.02,
                    -1.3,
                    -1.44,
                    -1.09,
                    -1.07,
                    -1.07,
                    -0.79,
                    -0.27,
                    0.85,
                    23.53,
                    36.54,
                    46.03,
                    55.57,
                    54.95,
                    49.23,
                    44.99,
                    45.96,
                    35
                ],
                "unit": "EUR/MWh"
                }
EXPECTED_PRICES = {
    1672527600: -5.17,
    1672531200: -1.07,
    1672534800: -1.47,
    1672538400: -5.08,
    1672542000: -4.49,
    1672545600: -5.4,
    1672549200: -5.02,
    1672552800: -1.3,
    1672556400: -1.44,
    1672560000: -1.09,
    1672563600: -1.07,
    1672567200: -1.07,
    1672570800: -0.79,
    1672574400: -0.27,
    1672578000: 0.85,
    1672581600: 23.53,
    1672585200: 36.54,
    1672588800: 46.03,
    1672592400: 55.57,
    1672596000: 54.95,
    1672599600: 49.23,
    1672603200: 44.99,
    1672606800: 45.96,
    1672610400: 35,
}
